import db from "@/configs/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  startAt,
  startAfter,
  endAt,
  getDocs,
  limit,
} from "firebase/firestore";
import DocAttribute from "@/types/docType";

const docsRef = collection(db, "documents");

export const fetchDocumentations = async (keyword: string, lastValue?: string) => {
  if (!lastValue || lastValue == "") {
    const querySnapshot = await getDocs(
      query(
        docsRef,
        orderBy("lowercase_name"),
        startAt(keyword.toLowerCase()),
        endAt(keyword.toLowerCase() + "\uf8ff"),
        limit(5)
      )
    );
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        lowerCaseName: data.lowercase_name,
        description: data.description,
        url: data.url,
      } as DocAttribute;
    });
  } else {
    const querySnapshot = await getDocs(
      query(
        docsRef,
        orderBy("lowercase_name"),
        startAfter(lastValue.toLowerCase()),
        endAt(keyword.toLowerCase() + "\uf8ff"),
        limit(5)
      )
    );
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        lowerCaseName: data.lowercase_name,
        description: data.description,
        url: data.url,
      } as DocAttribute;
    });
  }
};
