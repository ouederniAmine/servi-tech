
const InspectionItemTable = (props) => {
  const [data, setData] = useState([]);

  return (
  <><td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  value={items.Frein.Palan}  onChange={(e)=>{
    e.preventDefault();
    console.log(items.Frein.Palan);
    setItems({...items, Frein:{...items.Frein, Palan: e.target.value}});
  }}/>
  </td>
  <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  value={items.Frein.Palan}  onChange={(e)=>{
    e.preventDefault();
    setItems({...items, Frein:{...items.Frein, Palan: e.target.value}});
  }}/>
  </td>
  <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  value={items.Frein.Palan}  onChange={(e)=>{
    e.preventDefault();
    setItems({...items, Frein:{...items.Frein, Palan: e.target.value}});
  }}/>
  </td></>
  );
};

export default InspectionItemTable;