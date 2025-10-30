import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.jsx";

export default function Index() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-black dark:text-white">
        <h1 className="text-2xl font-semibold">Overview</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-medium">75</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Licenses</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-medium">5</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-medium">5</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Client Version</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-medium">v1.2.1</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
