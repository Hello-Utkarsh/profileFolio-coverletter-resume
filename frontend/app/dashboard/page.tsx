import React from 'react';
import RadialProfileCard from '../components/radialProfileCard';
import UserResume from '../components/UserResume';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CoverLetter from '../components/cover-letter';

const cards = [
  {
    name: 'Generate AI Cover',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at aliquid quisquam velit ducimus eos.',
    dialogContent: <CoverLetter />,
    dialogTrigger: 'Open Cover Letter',
  },
  {
    name: 'Generate AI Resume',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at aliquid quisquam velit ducimus eos.',
    dialogContent: '',
    dialogTrigger: 'Open Resume',
  },
  {
    name: 'Analyze Profile',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at aliquid quisquam velit ducimus eos.',
    dialogContent: '',
    dialogTrigger: 'Open Profile Analysis',
  },
  {
    name: 'Generate AI Job Description',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at aliquid quisquam velit ducimus eos.',
    dialogContent: '',
    dialogTrigger: 'Open Job Description',
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full px-8 py-4 ">
      <div className="flex">
        <RadialProfileCard />
        <div className="w-9/12 mx-2 flex flex-col">
          <Card>
            <CardHeader className='p-4'>
              <CardTitle>Fun fact from your Profile</CardTitle>
              <CardContent className='p-0'>You Are 5% Likely To Be Replaced By AI</CardContent>
            </CardHeader>
          </Card>
          <div className="grid grid-cols-2 gap-1 my-2">
            {cards.map((card, index) => (
              <>
                <div key={index} className="rounded-lg py-1 px-1">
                  <Card>
                    <CardHeader className='py-2'>
                      <CardTitle>{card.name}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className='pb-3'>
                      <Dialog>
                        <DialogTrigger>{card.dialogTrigger}</DialogTrigger>

                        <DialogContent className="min-w-[75%] min-h-[75%]">
                          {card.dialogContent}
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <UserResume />
    </div>
  );
};

export default Dashboard;
