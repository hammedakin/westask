import { useState } from "react";
import Modal from "./Modal";
import { FaGift } from "react-icons/fa6";

function App() {

  {/* state to handle the modal */ }

  const [open, setOpen] = useState(false);

  {/* state to handle the form */ }

  const [formField, setFormField] = useState({
    institution: "",
    level: "",
    field: "",
    gpa: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormField((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <main className="d-flex justify-center items-center my-10 margins">
      <div className="bg-white rounded-2xl py-10 margins max-w-[600px]">

        {/* breadcrumbs */}

        <div className="grid grid-cols-4 gap-6 justify-center">
          <div className="py-1 bg-[#0256B2] rounded-sm"></div>
          <div className="py-1 bg-[#E6EEF7] rounded-sm"></div>
          <div className="py-1 bg-[#E6EEF7] rounded-sm"></div>
          <div className="py-1 bg-[#E6EEF7] rounded-sm"></div>
        </div>

        {/* Basic Info */}

        <div className="text-center my-10">
          <h4 className="text-xl font-bold pb-2">
            Your Education 🎓
          </h4>
          <p className="text-[#666666] text-base font-normal pb-2">Tell Us about your academic background </p>
          <p className="text-[#0256B2] font-semibold "> 800 WESPoint remaining to unlock ESA </p>
        </div>

        <div className="rounded-xl py-4 px-6 bg-[#E6EEF7] text-[#0256B2] font-extrabold flex items-center gap-2">
          <FaGift /> Your Reward for this step is 200 WESPoints
        </div>

        {/* The Form */}

        <div className="my-10">

          <form>

            <div className="my-3">
              <label htmlFor="institution" className="font-medium text-sm">
                Name of Institution <span className="text-red-600">*</span>
              </label>
              <select
                name="institution"
                id="institution"
                onChange={handleChange}
                value={formField?.institution}
                className="border-[#D0D5DD] border bg-white rounded-lg p-3 outline-none text-sm text-gray-500 w-full mt-1"
              >
                <option value="WESOnline"> WESOnline </option>
                <option value="WESOffline"> WESOffline </option>
              </select>
            </div>

            <div className="my-3">
              <label htmlFor="institution" className="font-medium text-sm">
                Where are you on your journey? <span className="text-red-600">*</span>
              </label>
              <select
                name="institution"
                id="institution"
                onChange={handleChange}
                value={formField?.institution}
                className="border-[#D0D5DD] border bg-white rounded-lg p-3 outline-none text-sm text-gray-500 w-full mt-1"
              >
                <option value="100"> 100 Level </option>
                <option value="200"> 200 Level </option>
                <option value="300"> 300 Level </option>
                <option value="400"> 400 Level</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">

              <div className="">
                <label htmlFor="field" className="font-medium text-sm">
                  Field of Study <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="field"
                  id="field"
                  onChange={handleChange}
                  placeholder="Chemistry"
                  value={formField?.field}
                  className="border-[#D0D5DD] border bg-white rounded-lg p-3 outline-none text-sm text-black w-full mt-1"
                />
              </div>

              <div className="">
                <label htmlFor="gpa" className="font-medium text-sm">
                  GPA <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="gpa"
                  id="gpa"
                  onChange={handleChange}
                  placeholder="__ __ __ __"
                  value={formField?.gpa}
                  className="border-[#D0D5DD] border bg-white rounded-lg p-3 outline-none text-sm text-black w-full mt-1 "
                />
              </div>
            </div>

            <div className="my-3">
              <label htmlFor="institution" className="font-medium text-sm">
                What areas interest you most? <span className="text-red-600">*</span>
              </label>
              <select
                name="institution"
                id="institution"
                onChange={handleChange}
                value={formField?.institution}
                className="border-[#D0D5DD] border bg-white rounded-lg p-3 outline-none text-sm text-gray-500 w-full mt-1"
              >
                <option value="Business & Management"> Business & Management  </option>
                <option value="Economics"> Economics  </option>
                <option value="Digital Technology"> Digital Technology  </option>

              </select>
            </div>

            <div className=" mt-15 flex md:flex-row flex-col justify-center  md:justify-between">

              <button
                type="button"
                className="outline-none px-4 py-2 text-medium text-black font-bold bg-white rounded-lg"
              >
                Skip For Now
              </button>

              <button
                type="button"
                className="outline-none md:mt-0 px-14 py-2 text-md text-medium bg-[#0256B2] text-white rounded-lg font-bold"
                onClick={() => setOpen(true)}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}

export default App;
