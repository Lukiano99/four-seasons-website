import NumberTicker from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

const AboutUsCard = () => {
  return (
    <Card className="space-y-4 rounded-3xl border-background bg-muted p-6 transition-all hover:border-accent-foreground/20 dark:bg-muted/40 md:hover:cursor-pointer">
      <CardTitle className="flex flex-col gap-4">
        <Badge className="flex w-fit items-center justify-center border-primary bg-transparent text-sm font-semibold text-accent-foreground brightness-125 hover:bg-transparent dark:border-transparent dark:bg-muted">
          Zanimljivo
        </Badge>
        Mlad, energičan i strastven tim
      </CardTitle>
      <CardDescription>
        Posvećeni smo stvaranju proizvoda sa dušom i karakterom. S ponosom
        delimo našu strast sa vama.
      </CardDescription>
      <CardFooter className="flex flex-col items-start space-x-0 space-y-4 px-0 md:flex-row md:items-center md:justify-start md:space-x-8 md:space-y-0 md:pt-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex text-6xl font-bold">
            <NumberTicker value={40} />+
            <p className="flex pl-20 md:hidden">⚡</p>
          </div>
          <CardDescription className="px-2">
            Zadovoljnih klijenata
          </CardDescription>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex text-6xl font-bold">
            <NumberTicker value={20} />h
            <p className="flex pl-20 md:hidden">🌊</p>
          </div>
          <CardDescription className="px-2">
            Posvećenih jednoj dasci
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AboutUsCard;
