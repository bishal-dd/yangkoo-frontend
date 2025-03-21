"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export function NavigationBar() {
  const { orgId } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-6 pl-6 pr-6 relative">
      <nav className="relative flex items-center justify-between p-2 border backdrop-blur-xl bg-white/30 rounded-full">
        <div className="text-xl font-bold text-[hsl(var(--primary))]">
          <Link href="/">Yangkoo</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <Button asChild className="text-white rounded-full">
              <Link href="/home/sign-up">Register</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-[hsl(var(--secondary))] border border-[hsl(var(--secondary))] rounded-full"
            >
              <Link href="/home/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            {orgId ? (
              <Button
                asChild
                variant="outline"
                className="text-[hsl(var(--secondary))] border border-[hsl(var(--secondary))] rounded-full"
              >
                <Link href="/hotel">Dashboard</Link>
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                className="text-[hsl(var(--secondary))] border border-[hsl(var(--secondary))] rounded-full"
              >
                <Link href="/choose-entities">List your property</Link>
              </Button>
            )}
            <UserButton />
          </SignedIn>
          <Button variant="ghost" className="text-3xl">
            <Link href="/home/contact">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 30C27.0001 30.1313 26.9743 30.2614 26.924 30.3828C26.8738 30.5041 26.8001 30.6144 26.7073 30.7073C26.6144 30.8001 26.5041 30.8738 26.3828 30.924C26.2614 30.9743 26.1313 31.0001 26 31H6C5.86866 31.0001 5.73859 30.9743 5.61723 30.924C5.49587 30.8738 5.3856 30.8001 5.29273 30.7073C5.19985 30.6144 5.1262 30.5041 5.07597 30.3828C5.02574 30.2614 4.99993 30.1313 5 30C5 27.0826 6.15893 24.2847 8.22183 22.2218C10.2847 20.1589 13.0826 19 16 19C18.9174 19 21.7153 20.1589 23.7782 22.2218C25.8411 24.2847 27 27.0826 27 30ZM16 5C14.8133 5 13.6533 5.35189 12.6666 6.01118C11.6799 6.67047 10.9108 7.60754 10.4567 8.7039C10.0026 9.80026 9.88378 11.0067 10.1153 12.1705C10.3468 13.3344 10.9182 14.4035 11.7574 15.2426C12.5965 16.0818 13.6656 16.6532 14.8295 16.8847C15.9933 17.1162 17.1997 16.9974 18.2961 16.5433C19.3925 16.0892 20.3295 15.3201 20.9888 14.3334C21.6481 13.3467 22 12.1867 22 11C21.9983 9.40924 21.3656 7.88412 20.2407 6.75928C19.1159 5.63444 17.5908 5.00174 16 5ZM7 14C7.53022 13.9993 8.03853 13.7884 8.41345 13.4135C8.78838 13.0385 8.99931 12.5302 9 12V10C9 9.46957 8.78929 8.96086 8.41421 8.58579C8.03914 8.21071 7.53043 8 7 8C6.46957 8 5.96086 8.21071 5.58579 8.58579C5.21071 8.96086 5 9.46957 5 10V12C5.00069 12.5302 5.21162 13.0385 5.58655 13.4135C5.96147 13.7884 6.46978 13.9993 7 14ZM16 3C17.3442 3.00137 18.6663 3.34164 19.8441 3.98936C21.0219 4.63707 22.0174 5.57131 22.7385 6.70569C23.3118 6.31732 23.9767 6.08564 24.6672 6.03363C23.7949 4.5047 22.5336 3.23372 21.0114 2.34968C19.4893 1.46564 17.7603 1 16 1C14.2397 1 12.5107 1.46564 10.9886 2.34968C9.46635 3.23372 8.2051 4.5047 7.33276 6.03363C8.02327 6.08564 8.68817 6.31732 9.26147 6.70569C9.98257 5.57131 10.9781 4.63707 12.1559 3.98936C13.3337 3.34164 14.6558 3.00137 16 3ZM25 8C24.4698 8.00069 23.9615 8.21162 23.5865 8.58655C23.2116 8.96147 23.0007 9.46978 23 10V12C23.0005 12.3337 23.0847 12.662 23.2448 12.9548C23.4049 13.2476 23.6358 13.4957 23.9164 13.6763C23.7637 14.3358 23.3925 14.9243 22.863 15.3462C22.3336 15.7681 21.677 15.9985 21 16C20.7348 16 20.4804 16.1054 20.2929 16.2929C20.1054 16.4804 20 16.7348 20 17C20 17.2652 20.1054 17.5196 20.2929 17.7071C20.4804 17.8946 20.7348 18 21 18C22.1909 17.9967 23.3414 17.568 24.244 16.7912C25.1467 16.0145 25.7421 14.9407 25.9228 13.7636C26.2463 13.5961 26.5177 13.3431 26.7076 13.0322C26.8975 12.7213 26.9987 12.3643 27 12V10C26.9993 9.46978 26.7884 8.96147 26.4135 8.58655C26.0385 8.21162 25.5302 8.00069 25 8Z"
                  fill="#0F62FE"
                />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu using Sheet */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 space-y-4">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <SignedOut>
                <Button
                  asChild
                  className="w-full text-white rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/home/sign-up">Register</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-[hsl(var(--secondary))] border-[hsl(var(--secondary))] rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/home/sign-in">Sign In</Link>
                </Button>
              </SignedOut>

              <SignedIn>
                {orgId ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-[hsl(var(--secondary))] border-[hsl(var(--secondary))] rounded-full"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/hotel">Dashboard</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-[hsl(var(--secondary))] border-[hsl(var(--secondary))] rounded-full"
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/choose-entities">List your property</Link>
                  </Button>
                )}
                <div className="flex justify-center">
                  <UserButton />
                </div>
              </SignedIn>

              <Button
                asChild
                className="w-full rounded-full"
                onClick={() => setOpen(false)}
              >
                <Link
                  href="/home/contact"
                  className="flex items-center justify-center w-full p-2 "
                >
                  Contact Us
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
