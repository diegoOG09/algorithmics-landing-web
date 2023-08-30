import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const quote = formData.get("quote")?.toString();

  if (!name || !quote) {
    return new Response("Faltan campos obligatorios", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const reviewsRef = db.collection("reviews");
    await reviewsRef.add({
      name,
      quote,
    });
  } catch (error) {
    return new Response("Algo salió mal", {
      status: 500,
    });
  }
  return redirect("/");
};