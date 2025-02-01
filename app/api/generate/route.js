import clientPromise from "@/lib/mongodb";

export async function POST(req) {

    const body = await req.json(); // Parse the incoming request JSON body

    if (!body.url || !body.shorturl) {
        return new Response(
            JSON.stringify({ success: false, error: true, message: "Invalid input" }),
            { status: 400 }
        );
    }

    const client = await clientPromise;
    const db = client.db("Shortyfy");
    const collection = db.collection("url");

    const doc=await collection.findOne({shorturl:body.shorturl})
    if(doc){
        return new Response(
            JSON.stringify({ success: false, error: true, message: "url already exits" }),
            { status: 200 }
        );
    }
    await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
    });



    return new Response(
        JSON.stringify({ success: true, error: false, message: "Successfully generated" }),
        { status: 200 }
    );
}

