import { IGames } from '@models/games';

export interface DashboardPageProps {
   games: IGames[];
}

const DashboardPage = ({ games }: DashboardPageProps) => {
   const averageScore =
      games.length > 0
         ? (
              games.reduce((sum, game) => {
                 return (sum += game.score);
              }, 0) / games.length
           ).toFixed(2)
         : '';
   return (
      <div className="container mx-auto flex h-to-fit flex-col items-center gap-4 p-4">
         <h1>Current Average: {averageScore}</h1>
      </div>
   );
};

export default DashboardPage;
