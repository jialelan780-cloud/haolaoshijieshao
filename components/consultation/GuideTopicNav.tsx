"use client";

export default function GuideTopicNav({
  label,
  items,
}: {
  label: string;
  items: string[][];
}) {
  return (
    <nav className="c-guide-nav" aria-label={label}>
      {items.map(([id, title], i) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(event) => {
            const section =
              event.currentTarget.closest<HTMLElement>(".c-section");
            const target = document.getElementById(id);
            if (!section || !target || !section.closest(".is-presenting"))
              return;
            event.preventDefault();
            // Only scroll this chapter. Native fragment navigation also moves
            // the enclosing presentation viewport and hides its sticky menu.
            const navHeight =
              event.currentTarget.parentElement?.offsetHeight ?? 64;
            section.scrollTo({
              top:
                section.scrollTop +
                target.getBoundingClientRect().top -
                section.getBoundingClientRect().top -
                navHeight -
                12,
              behavior: "instant",
            });
          }}
        >
          <span>0{i + 1}</span>
          {title}
          <b aria-hidden="true">↘</b>
        </a>
      ))}
    </nav>
  );
}
