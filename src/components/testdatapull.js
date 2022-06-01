export default function App() {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "test")).then((data) => {
      data.docs.forEach((item) => {
        console.log(item.data());
        setQueryData((current) => {
          return [...current, item];
        });
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ul key="testDataList">
        {queryData.map((user, index) => {
          return (
            <li key={"testli" + index}>
              {user.id} === {JSON.stringify(user.data())}
            </li>
          );
        })}
      </ul>
      <StatusBar style="auto" />
    </View>
  );
}
