"use client";

import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Label,
  Modal,
  Tabs,
  TextInput,
  Timeline,
  Tooltip,
} from "flowbite-react";
import { useState } from "react";
import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiUserCircle,
} from "react-icons/hi";
import Header from "./components/header";
import { SidebarProvider } from "./context/SidebarContext";

export default function Index(): JSX.Element {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
      </div>
    </SidebarProvider>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
            Welcome to <code>Jungler Crocs</code> on <code>Next.js</code>!
          </h1>
        </header>
      </section>
      <section>
        <TabsCrocs />
      </section>
      <hr />
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Timeline
          </h2>
        </header>
        <TimelineCrocs />
      </section>
    </div>
  );
}

function ButtonCrocs(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to yellow
      </Button>
    </div>
  );
}

function ButtonGroupCrocs(): JSX.Element {
  return (
    <Button.Group>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" /> Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" /> Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
      </Button>
    </Button.Group>
  );
}

function CardCrocs(): JSX.Element {
  return (
    <div className="max-w-sm">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://i0.wp.com/dianisa.com/wp-content/uploads/2022/08/11.-Profil-WA-Illustrasi.jpg?resize=1000%2C580&ssl=1"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dr. Doe John
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Elit nostrud amet veniam elit cupidatat aliqua cupidatat consequat ex
          anim sint. I am the real Crocs Jungler.
        </p>
      </Card>
    </div>
  );
}

function DropdownCrocs(): JSX.Element {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Header>
        <span className="block text-sm">Bonnie success</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

function FormsCrocs(): JSX.Element {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

function ModalCrocs(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function TabsCrocs(): JSX.Element {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="User Profile" icon={HiUserCircle}>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              User Profile
            </h2>
          </header>
          <CardCrocs />
        </section>
      </Tabs.Item>
      <Tabs.Item title="Buttons" icon={HiDatabase}>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Buttons
            </h2>
          </header>
          <ButtonCrocs />
        </section>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Button group
            </h2>
          </header>
          <ButtonGroupCrocs />
        </section>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Button With Tooltips
            </h2>
          </header>
          <TooltipsCrocs />
        </section>
      </Tabs.Item>
      <Tabs.Item title="Inputs" icon={HiAdjustments}>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Dropdown
            </h2>
          </header>
          <DropdownCrocs />
        </section>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Forms
            </h2>
          </header>
          <FormsCrocs />
        </section>
      </Tabs.Item>
      <Tabs.Item title="Popup" icon={HiClipboardList}>
        <section>
          <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
              Popup
            </h2>
          </header>
          <ModalCrocs />
        </section>
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
}

function TimelineCrocs(): JSX.Element {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Mei 2023</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>June 2023</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>July 2023</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

function TooltipsCrocs(): JSX.Element {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
}
