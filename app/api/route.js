import { NextResponse } from "next/server";
import { createConnection } from "mysql2/promise";

export async function GET() {
  try {
    // Create a MySQL connection
    const connection = await createConnection({
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'Si4nipAr!6',
      database: 'kemenperin',
    });

    // Execute a simple query
    const [rows] = await connection.execute('SELECT * FROM jumlah_perusahaan');

    // Close the connection
    await connection.end();

    // Return the query result as JSON response
    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    console.error("Error executing MySQL query:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
