import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div
      className={`${styles.flexCenter} flex-wrap w-full bg-[#F4CE14] py-[2rem]`}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain bg-[#F4CE14]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
