import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface FooterLinkItemProps {
  label: string;
  released: boolean;
}
const FooterLinkItem = ({ label, released }: FooterLinkItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{label}</TooltipTrigger>
        <TooltipContent>
          <p>{!released ? "Uskoro" : "Novo"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FooterLinkItem;
