import { MutableRefObject, useRef } from 'react'
import classes from '@/styles/ui.module.css'

export default function MeetupForm(props: any) {
  const titleInputRef: MutableRefObject<any> = useRef();
  const imageInputRef: MutableRefObject<any> = useRef();
  const addressInputRef: MutableRefObject<any> = useRef();
  const descriptionInputRef: MutableRefObject<any> = useRef();
  function submitHandler(event: any) {
    event.preventDefault();
    const meetup = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    props.onAddMeetup(meetup);
  }

  return (
    <div className={classes.card}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
}