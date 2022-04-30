import { HrClient } from '@/types/hr.client'
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'

const transport = new GrpcWebFetchTransport({
  baseUrl: 'http://localhost:4000',
})

export default new HrClient(transport)
