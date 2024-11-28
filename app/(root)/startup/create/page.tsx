import { redirect } from "next/navigation";
import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Startup",
  description: "Pitch, Vote and Grow",
};

const CreatePage = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup Pitch</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default CreatePage;
