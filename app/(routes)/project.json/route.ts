import { NextResponse } from 'next/server'
import { getProjects } from '../../lib/projects'

export async function GET(): Promise<NextResponse> {
    const projects = await getProjects()
    return NextResponse.json(projects)
}

