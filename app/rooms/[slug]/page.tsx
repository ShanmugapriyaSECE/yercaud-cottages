import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import RoomPageClient from "./RoomPageClient";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} | Sahana Holidays Yercaud`,
    description: room.longDescription,
  };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();
  return <RoomPageClient room={room} />;
}
