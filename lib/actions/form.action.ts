"use server";
import { UserFormData } from "@/types";
import { revalidatePath } from "next/cache";

export async function formSubmitAction(data: FormData) {
  try {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const companyName = data.get("companyName") as string;
    const desc = data.get("desc") as string;

    const dataToSend:UserFormData = {
      name,
      email,
      companyName,
      desc,
    }

    revalidatePath('/contact-us');

    return {
      success: true,
      message: "Form submitted successfully",
      dataToSend
    };
  } catch (error: Error | unknown) {
    return {
      success: false,
      message: "Something went wrong, please try again later",
      error: error,
    };
  }
}
