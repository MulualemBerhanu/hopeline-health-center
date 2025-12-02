import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json(
      { message: "Contact message created successfully", id: contactMessage.id },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating contact message:", error)
    return NextResponse.json(
      { error: "Failed to create contact message" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get("limit") || "10")

    const messages = await prisma.contactMessage.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(messages, { status: 200 })
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return NextResponse.json(
      { error: "Failed to fetch contact messages" },
      { status: 500 }
    )
  }
}

