import { useEffect } from "react";
import { events } from "../../../lib/data/sampleData";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";
import { AnimatePresence, motion } from "motion/react";
import { useAppDispatch, useAppSelector } from "../../../lib/stores/store";
import { setEvents } from "../eventSlice";


export default function EventDashboard() {
  const dispatch = useAppDispatch();
  const {events: appEvents, selectedEvent, formOpen} = useAppSelector(state => state.event);

  useEffect(() => {
    
    dispatch(setEvents(events));

    return () => {
      dispatch(setEvents([]));
    }

  }, [dispatch]);

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
                  />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
  )
}