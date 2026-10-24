import { ImageResponse } from 'next/og'

export function generateStaticParams() {
  return [{ size: '192' }, { size: '512' }]
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size } = await params
  const px = size === '512' ? 512 : 192

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#00d3f2',
          color: '#0f172a',
          fontSize: px * 0.45,
          fontWeight: 800,
        }}
      >
        RJ
      </div>
    ),
    { width: px, height: px }
  )
}
