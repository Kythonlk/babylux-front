import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardContent,
  CardFooter,
  Card,
  CardHeader,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="px-4 md:px-6 w-full max-w-2xl mx-auto grid gap-4">
      <header className="flex items-center justify-between py-4">
        <Link className="flex items-center gap-2 text-lg font-bold" href="#">
          <CameraIcon className="w-6 h-6" />
          Instagram
        </Link>
        <div className="flex items-center gap-6">
          <Button className="rounded-full" size="icon" variant="ghost">
            <SearchIcon className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <HeartIcon className="w-6 h-6" />
            <span className="sr-only">Activity</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Avatar className="w-6 h-6 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </header>
      <main className="grid gap-4">
        <Card className="rounded-none shadow-none border border-t-0 border-l-0 border-r-0">
          <CardContent className="p-2">
            <div className="grid gap-4">
              <Card className="rounded-none shadow-none border-2">
                <CardContent className="p-0">
                  <img
                    alt="Image"
                    className="aspect-video object-cover"
                    height={500}
                    src="/placeholder.svg"
                    width={500}
                  />
                </CardContent>
                <CardFooter className="p-2 grid gap-2">
                  <div className="flex items-center w-full">
                    <Button size="icon" variant="ghost">
                      <HeartIcon className="w-4 h-4" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <MessageCircleIcon className="w-4 h-4" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SendIcon className="w-4 h-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <BookmarkIcon className="w-4 h-4" />
                      <span className="sr-only">Comment</span>
                    </Button>
                  </div>
                  <div className="px-2 text-sm w-full grid gap-1.5">
                    <div>
                      <Link className="font-medium" href="#">
                        john
                      </Link>
                      Wow, this photo is absolutely stunning! 😍✨
                    </div>
                    <div>
                      <Link className="font-medium" href="#">
                        amelia
                      </Link>
                      This post just made my day! 😃👍
                    </div>
                  </div>
                </CardFooter>
              </Card>
              <Card className="rounded-none shadow-none border-2">
                <CardHeader className="p-2 flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <Link className="font-medium" href="#">
                      acmeinc
                    </Link>
                    <div className="text-xs text-gray-500 leading-none">
                      2 minutes ago
                    </div>
                  </div>
                  <Button
                    className="ml-auto rounded-full"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    alt="Image"
                    className="aspect-video object-cover"
                    height={500}
                    src="/placeholder.svg"
                    width={500}
                  />
                </CardContent>
                <CardFooter className="p-2 grid gap-2">
                  <div className="flex items-center w-full">
                    <Button size="icon" variant="ghost">
                      <HeartIcon className="w-4 h-4" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <MessageCircleIcon className="w-4 h-4" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SendIcon className="w-4 h-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button className="ml-auto" size="icon" variant="ghost">
                      <BookmarkIcon className="w-4 h-4" />
                      <span className="sr-only">Comment</span>
                    </Button>
                  </div>
                  <div className="px-2 text-sm w-full grid gap-1.5">
                    <div>
                      <Link className="font-medium" href="#">
                        john
                      </Link>
                      Wow, this photo is absolutely stunning! 😍✨
                    </div>
                    <div>
                      <Link className="font-medium" href="#">
                        amelia
                      </Link>
                      This post just made my day! 😃👍
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-none shadow-none border-2">
          <CardHeader className="p-2 flex items-center gap-2">
            <Avatar className="w-8 h-8 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <Link className="font-medium" href="#">
                acmeinc
              </Link>
              <div className="text-xs text-gray-500 leading-none">
                2 minutes ago
              </div>
            </div>
            <Button
              className="ml-auto rounded-full"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <img
              alt="Image"
              className="aspect-video object-cover"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
          </CardContent>
          <CardFooter className="p-2 grid gap-2">
            <div className="flex items-center w-full">
              <Button size="icon" variant="ghost">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button size="icon" variant="ghost">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button size="icon" variant="ghost">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button className="ml-auto" size="icon" variant="ghost">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link className="font-medium" href="#">
                  john
                </Link>
                Wow, this photo is absolutely stunning! 😍✨
              </div>
              <div>
                <Link className="font-medium" href="#">
                  amelia
                </Link>
                This post just made my day! 😃👍
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card className="rounded-none shadow-none border-2">
          <CardHeader className="p-2 flex items-center gap-2">
            <Avatar className="w-8 h-8 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <Link className="font-medium" href="#">
                acmeinc
              </Link>
              <div className="text-xs text-gray-500 leading-none">
                2 minutes ago
              </div>
            </div>
            <Button
              className="ml-auto rounded-full"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <img
              alt="Image"
              className="aspect-video object-cover"
              height={500}
              src="/placeholder.svg"
              width={500}
            />
          </CardContent>
          <CardFooter className="p-2 grid gap-2">
            <div className="flex items-center w-full">
              <Button size="icon" variant="ghost">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button size="icon" variant="ghost">
                <MessageCircleIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button size="icon" variant="ghost">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button className="ml-auto" size="icon" variant="ghost">
                <BookmarkIcon className="w-4 h-4" />
                <span className="sr-only">Comment</span>
              </Button>
            </div>
            <div className="px-2 text-sm w-full grid gap-1.5">
              <div>
                <Link className="font-medium" href="#">
                  john
                </Link>
                Wow, this photo is absolutely stunning! 😍✨
              </div>
              <div>
                <Link className="font-medium" href="#">
                  amelia
                </Link>
                This post just made my day! 😃👍
              </div>
            </div>
          </CardFooter>
        </Card>
      </main>
      <nav className="flex items-center justify-between border-t border-gray-200 py-2">
        <Link className="flex flex-1 flex-col items-center text-xs" href="#">
          <HomeIcon className="w-6 h-6" />
          Home
        </Link>
        <Link className="flex flex-1 flex-col items-center text-xs" href="#">
          <SearchIcon className="w-6 h-6" />
          Explore
        </Link>
        <Link className="flex flex-1 flex-col items-center text-xs" href="#">
          <HeartIcon className="w-6 h-6" />
          Activity
        </Link>
        <Link className="flex flex-1 flex-col items-center text-xs" href="#">
          <UserIcon className="w-6 h-6" />
          Profile
        </Link>
      </nav>
    </div>
  );
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
