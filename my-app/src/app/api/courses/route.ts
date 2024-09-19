import { NextResponse } from 'next/server';
import { courses } from '@/utils/db';

export async function GET() {
    return NextResponse.json(courses);
}

export async function POST(request: Request) {
    const newCourse = await request.json();
    const id = courses.length + 1;

    const course = { ...newCourse, id };
    courses.push(course);
    return NextResponse.json(course, { status: 201 });
}

export async function PATCH(request: Request) {
    const updateData = await request.json();
    const { id } = updateData;

    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses[index] = { ...courses[index], ...updateData };
        return NextResponse.json(courses[index]);
    }
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '');

    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
        return NextResponse.json({}, { status: 204 });
    }
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
}