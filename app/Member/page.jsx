import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);

  console.log(session, "session");

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/Member");
  // }
  return (
    <div>
      <h1>Member server Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      <h1>{JSON?.stringify(session)}</h1>
    </div>
  );
};

export default Member;
