export class HeaderLink{
    name: string;
    path: string;
    sublink: SubLink;
}

export class SubLink{
    id: number;
    name: string;
    content: SublinkContent;
}

export class SublinkContent{
    heading: string;
    content: string;
    link: string;
}