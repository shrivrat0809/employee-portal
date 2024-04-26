import EditEmployee from "./EditEmployee";

const Employee = ({ name, role, img }) => {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx- h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={img}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-slate-500 font-medium">{role}</p>
        </div>
        <EditEmployee name={name} role={role} img={img} />
      </div>
    </div>
  );
};

export default Employee;
