import db from "@/configs/firebase";
import {
  collection,
  query,
  where,
  orderBy,
  startAt,
  endAt,
  getDocs,
} from "firebase/firestore";
import DocAttribute from "@/types/docType";

const docsRef = collection(db, "documents");

export const getDocumentations = async (keyword: string) => {
  const querySnapshot = await getDocs(
    query(
      docsRef,
      orderBy("name"),
      startAt(keyword.toUpperCase()),
      endAt(keyword.toUpperCase() + "\uf8ff")
    )
  );
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      description: data.description,
      url: data.url,
    } as DocAttribute;
  });
};
