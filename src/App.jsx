
function App() {

  return (
    <main className="d-flex justify-center items-center my-10 margins">
      <div className="bg-white rounded-2xl py-10 margins max-w-[600px]">

        <div className="grid grid-cols-4 gap-6 justify-center">
          <div className="py-1 bg-blue-800 rounded-sm"></div>
          <div className="py-1 bg-blue-100 rounded-sm"></div>
          <div className="py-1 bg-blue-100 rounded-sm"></div>
          <div className="py-1 bg-blue-100 rounded-sm"></div>
        </div>

        <div className="text-center my-10">
          <h4 className="text-xl font-medium">
            Your Education 🎓
          </h4>
          <p className="text-gray-600">Tell Us about your academic background </p>
          <p className="text-blue-800"> 800 WESPoint remaining to unlock ESA </p>
        </div>

        <div className="rounded-xl py-4 px-6 bg-blue-50 text-blue-800 font-medium">
          Your Reward for this step is 200 WESPoints
        </div>
      </div>
    </main>
  );
}

export default App;
