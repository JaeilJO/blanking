import { cookies, headers } from 'next/headers';

export async function GET(req: Request, res: Response) {
    const cookie = cookies();
}

export async function POST(req: Request) {}

export async function PATCH(request: Request) {}

export async function DELETE(request: Request) {}
