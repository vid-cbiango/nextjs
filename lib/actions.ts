"use server";
import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

// Recuperer les données
export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await auth(); // know who's creating the pitch
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  // destructurer les valeurs
  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  // créer le slug
  const slug = slugify(title as string, { lower: true, strict: true });
  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: { _type: slug, current: slug },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
    };

    // Write in sanity pour créer la startup
    const result = await writeClient.create({_type: "startup", ...startup, });
    // On la retourne
    return parseServerActionResponse({ ...result, error: '', status: 'SUCCESS'})
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
