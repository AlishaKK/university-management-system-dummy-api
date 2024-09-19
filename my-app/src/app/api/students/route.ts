import { NextResponse } from 'next/server';
import { students } from '@/utils/db';

export async function GET() {
    return NextResponse.json(students);
}

export async function POST(request: Request) {
    const newStudent = await request.json();
    const id = students.length + 1;

    const student = { ...newStudent, id };
    students.push(student);
    return NextResponse.json(student, { status: 201 });
}

export async function PATCH(request: Request) {
    const updateData = await request.json();
    const { id } = updateData;

    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updateData };
        return NextResponse.json(students[index]);
    }
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '');

    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        return NextResponse.json({}, { status: 204 });
    }
    return NextResponse.json({ message: "Student not found" }, { status: 404 });
}