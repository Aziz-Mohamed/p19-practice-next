"use server";

import { createClient } from "@/utils/supabase/server";
import { fetchAppointments, insertAppointment } from "./data-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function createAppointment(formData) {
  const rawFormData =
    formData instanceof FormData
      ? {
          userID: formData.get("userID"),
          doctorID: formData.get("doctorID"),
          appointmentDate: formData.get("appointmentDate"),
          appointmentTime: formData.get("appointmentTime"),
          appointmentStatus: formData.get("appointmentStatus"),
        }
      : formData;
  const appointments = await insertAppointment(rawFormData);
}

export async function getAppointments() {
  const appointments = await fetchAppointments();
  console.log("appointments", appointments);
  return appointments;
}

export async function signUpNewUser(formData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData?.get("email"),
    password: formData?.get("password"),
  });

  if (error) {
    console.error("Signup error:", error.message);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithGoogleOAuth() {
  // 1. Create a Supabase client
  const supabase = createClient();
  const origin = headers().get("origin");
  console.log("origin", origin);  
  // 2. Sign in with GitHub
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
    },
}});

  if (error) {
    console.log("the error is", error);
  } else {
    return redirect(data.url);
  }
  // 3. Redirect to landing page
}