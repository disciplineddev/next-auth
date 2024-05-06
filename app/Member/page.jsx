import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await getServerSession();
  return session;
}

const Member = async () => {
  const session = await getUser();

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/Member");
  // }
  return (
    <div>
      <h1>Member server Session</h1>
      {JSON.stringify(session)}
      {/* <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      <h1>{JSON?.stringify(session)}</h1> */}
    </div>
  );
};

export default Member;
