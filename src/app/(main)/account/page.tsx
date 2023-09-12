import { Heading } from "@/components/ui/heading";
import { currentUser } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";

const Account = async () => {
  const user = await currentUser();
  const userEmailAddress = user?.emailAddresses[0].emailAddress;
  return (
    <div className="mt-8">
      <div>
        <Heading size="h2">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-start gap-4 md:gap-2">
            <div className="border-2 border-green-600 text-green-600 bg-transparent rounded-full h-10 w-10 flex items-center justify-center">
              <LayoutDashboard className="text-green-600" size={26} />
            </div>
            <span>
              <span>{userEmailAddress}</span>
            </span>
          </div>
        </Heading>
        <p className="text-muted-foreground mt-4">
          Name: {user?.firstName!} {user?.lastName}
        </p>
      </div>
    </div>
  );
};

export default Account;
