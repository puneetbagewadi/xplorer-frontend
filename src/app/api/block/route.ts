// app/api/users/route.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";

// GET request handler
export async function GET(request: Request) {
  try {
    // Get query parameters from the URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // Get headers if needed
    const headersList = headers();
    const token = headersList.get("authorization");

    // Make API request to external service
    const response = await fetch(
      "https://api.unmarshal.com/v1/partisiablockchain/block/1/details?chainId=false&auth_key=ZWv4wP5thw5wyjSgIaUGR5ca7tHefBevmRvaNe6b",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Return the response
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("GET request failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST request handler
export async function POST(request: Request) {
  try {
    // Get the request body
    const body = await request.json();

    // Make API request to external service
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("POST request failed:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

// PUT request handler
export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const body = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const response = await fetch(`https://api.example.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("PUT request failed:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE request handler
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const response = await fetch(`https://api.example.com/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE request failed:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}

// Example with request timeout and abort controller
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 5000
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
