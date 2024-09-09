import Thumbnail from "Components/Thumbnail";

import info from "./Info.module.scss";

export default function Info() {
  return (
    <section className={info.info__container}>
      <Thumbnail
        format="circle"
        image="https://placehold.co/200x212"
        id="1"
        name={"Spider-man"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />

      <Thumbnail
        format="horizontal"
        image="https://placehold.co/200x212"
        id="2"
        date="01/01/2015"
        nPage="47 pages"
        name="Spider-man"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />

      <Thumbnail
        format="horizontal"
        image="https://placehold.co/200x212"
        id="3"
        date="01/01/2015"
        nPage="47 pages"
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />

      <Thumbnail
        format="horizontal"
        image="https://placehold.co/200x212"
        id="4"
        date="01/01/2015"
        nPage="47 pages"
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />

      <Thumbnail
        format="horizontal"
        image="https://placehold.co/200x212"
        id="5"
        date="01/01/2015"
        nPage="47 pages"
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />

      <Thumbnail
        format="horizontal"
        image="https://placehold.co/200x212"
        id="6"
        date="01/01/2015"
        nPage="47 pages"
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra."
      />
    </section>
  );
}
