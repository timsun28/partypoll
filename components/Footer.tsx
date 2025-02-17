import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-white flex flex-col items-center space-y-2">
            <div className="font-medium">Built with PartyKit and Next.js</div>
            <div>
                <Link className="underline" href="https://docs.partykit.io" target="_blank">
                    Docs
                </Link>{" "}
                |{" "}
                <Link className="underline" href="https://github.com/partykit/partypoll" target="_blank">
                    GitHub
                </Link>{" "}
                |{" "}
                <Link
                    className="underline"
                    href="https://docs.partykit.io/tutorials/add-partykit-to-a-nextjs-app"
                    target="_blank"
                >
                    Tutorial
                </Link>
            </div>
        </div>
    );
}
