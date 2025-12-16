import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
                <Image
                    src="/assets/profile.jpg"
                    alt="Profile picture"
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4 object-cover"
                    priority
                />
                <h1 className="text-2xl font-bold text-gray-800 mt-2">
                    Aryan Kumar
                </h1>
                <p className="text-gray-600 mt-4">
                    Hi! I'm a student interested in web development, design, and learning how to build clean user interfaces.
                </p>
                <p className="text-gray-600 mt-2">
                    I enjoy coding, problem-solving, and exploring new technologies.
                </p>
            </div>
        </div>
    );
}
