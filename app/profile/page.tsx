import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "CineScope is a web application that provides a comprehensive dashboard for movie enthusiasts. It allows users to explore, search, and manage their favorite movies, providing detailed information and insights.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <div className="intro mt-2.5">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br />
          <br />
          <b>
            And <i>pictures</i>
          </b>{" "}
          of scientists!
        </p>
      </main>
      <Footer />
    </div>
  );
}
