import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import image from "@/assets/bgImg.jpeg";

export default function CardWithForm(props: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle> {props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={props.image} width={700} height={700} alt="Post Image" />
        <CardDescription>dec</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
