import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const CardGroup = ({ cardData }) => {
  return (
    <div className="flex md:flex-row xs:flex-col md:gap-0 xs:gap-4 justify-between w-full">
      {cardData.map((card) => (
        <div
          className="flex-1 min-w-[150px] md:max-w-[calc(22%-1rem)]"
          key={card.id}
        >
          <Card className="flex flex-col h-full bg-primary border border-tertiary rounded">
            <CardHeader className="p-4">
              <div className="flex items-center space-x-4">
                <div className="rounded border border-grey-200 p-2 bg-white">
                  <img src={card.icon} alt={card.title} decoding="async" className="size-6" />
                </div>
                <CardTitle>{card.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 text-2xl font-medium p-4 pt-0">
              {card.value}
            </CardContent>
            <CardFooter className="text-gray-500 text-sm">
              {card.percentChange}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;