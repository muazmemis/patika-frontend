export default async function ProductDetail({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params
  return <div>ProductDetail {productId}</div>
}
