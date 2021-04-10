import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://games.mail.ru/pre_xl_resize/hotbox/content_files/gallery/2020/12/11/7ebee4bcf82f4e50b34018bf76cc5baa.jpg",
        followed: false,
        name: "Aliya",
        surname: "Nursultanova",
        status:
          "Не терплю, когда от меня чего-то ждут. У меня сразу же появляется желание сделать всё наоборот.",
        location: { city: "Auckland", country: "New Zealand" },
      },
      {
        id: 2,
        photoUrl:
          "https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-8.jpg",
        followed: false,
        name: "Aygerim",
        surname: "Nursultanova",
        status:
          "Я - не художник, но рисую свои мечты. Я - не писатель, но пишу свою книгу жизни.",
        location: { city: "Nur-Sultan", country: "Kazakhstan" },
      },
      {
        id: 3,
        photoUrl: "https://download-cs.net/steam/avatars/3426.jpg",
        followed: true,
        name: "Nemo",
        surname: "Trot",
        status: "Жизнь – как рояль: клавиша черная, клавиша белая, крышка…",
        location: { city: "Auckland", country: "New Zealand" },
      },
      {
        id: 4,
        photoUrl:
          "https://s.starladder.com/uploads/user_logo/1/c/f/a/2cd3973cbb443a4ed1a83c21c698d456.jpg",
        followed: false,
        name: "Matarina",
        surname: "Tomson",
        status:
          "Те, кто поддержал меня, когда я падал, теперь держитесь, мы взлетаем!",
        location: { city: "Christchurch", country: "New Zealand" },
      },
      {
        id: 5,
        photoUrl: "https://cs-love.net/avatars/images/cs-love-avatar-1009.jpg",
        followed: true,
        name: "Zoye",
        surname: "Smith",
        status: "Будьте собой. Все остальные места уже заняты",
        location: { city: "New York", country: "USA" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
