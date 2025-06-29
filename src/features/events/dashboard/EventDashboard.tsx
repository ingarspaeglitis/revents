import { useEffect, useState } from "react";
import { events } from "../../../lib/data/sampleData";
import type { AppEvent } from "../../../lib/types";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";
import { AnimatePresence, motion } from "motion/react";


type Props = {
  formOpen: boolean;
  setFormOpen: (isOpen: boolean) => void;
  formToggle: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
}

export default function EventDashboard({formOpen, setFormOpen, formToggle, selectedEvent} : Props) {

  const [appEvents, setAppEvents] = useState<AppEvent[]>([]);


  const handleCreateEvent = (event: AppEvent) => {
    setAppEvents(prevState => [...prevState, event]);
  }

  const handleUpdateEvent = (event: AppEvent) => {
    setAppEvents(prevState => {
      return prevState.map(x => x.id === event.id ? event : x);
    });
  }

  const handleDeleteEvent = (eventId: string) => {
    setAppEvents(prevState => prevState.filter(event => event.id !== eventId))
  };

  useEffect(() => {
    setAppEvents(events);

    return () => {
      setAppEvents([]);
    }
  }, []);

  return (
    <div className='flex flex-row w-full gap-6'>
        <div className='w-3/5'>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <div className='flex flex-col gap-4'>
                  {appEvents.map((event) => (
                    <EventCard 
                      formToggle={formToggle}
                      deleteEvent={handleDeleteEvent}
                      key={event.id} 
                      event={event}/>
                  ))} 
                </div>              
            </motion.div>             
          </AnimatePresence>
        </div>
        <div className='w-2/5 overflow-hidden'>
          <AnimatePresence>
            {formOpen && (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                  <EventForm 
                    key={selectedEvent?.id || 'new'}
                    setFormOpen={setFormOpen}
                    createEvent={handleCreateEvent}
                    updateEvent={handleUpdateEvent}
                    selectedEvent={selectedEvent}
                  />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}