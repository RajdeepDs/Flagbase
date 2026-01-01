import { redirect } from "next/navigation";

export default function Home() {
  redirect("/flags");
  return (
    <div>
      {" "}
      This route is reserved for Landing page of Flagbase. (will be redirected
      to "/flags")
    </div>
  );
}
