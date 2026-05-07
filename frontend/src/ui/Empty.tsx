function Empty({ resourceName }: { resourceName: string }) {
  return (
    <h4 className="font-bold text-sdcondary-600">
      هیچ {resourceName} ای یافت نشد!
    </h4>
  );
}

export default Empty;
