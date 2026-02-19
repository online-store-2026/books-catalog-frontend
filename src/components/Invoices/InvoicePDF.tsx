import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import type { Order } from '@/types/Order';

Font.register({
  family: 'Manrope',
  fonts: [
    { src: '/fonts/Manrope-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Manrope-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Manrope-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/Manrope-ExtraBold.ttf', fontWeight: 800 },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Manrope',
    fontWeight: 400,
    fontSize: 10,
    color: '#111111',
    padding: '48 48 64 48',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
    paddingBottom: 24,
    borderBottom: '1 solid #e8e8e8',
  },
  logo: {
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: -0.5,
    color: '#111',
  },
  invoiceLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: '#aaa',
    letterSpacing: 2,
    marginBottom: 4,
  },
  invoiceId: {
    fontSize: 12,
    fontWeight: 700,
    color: '#111',
  },
  metaLabel: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: '#aaa',
    marginBottom: 5,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgePaid: { backgroundColor: '#dcfce7' },
  badgePending: { backgroundColor: '#fef9c3' },
  badgeFailed: { backgroundColor: '#fee2e2' },
  badgeCancelled: { backgroundColor: '#f3f4f6' },
  badgeText: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  badgeTextPaid: { color: '#16a34a' },
  badgeTextPending: { color: '#ca8a04' },
  badgeTextFailed: { color: '#dc2626' },
  badgeTextCancelled: { color: '#6b7280' },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
    marginBottom: 2,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottom: '1 solid #f0f0f0',
    alignItems: 'center',
  },
  colImg: { width: 36, marginRight: 10 },
  colItem: { flex: 1 },
  colQty: { width: 60, textAlign: 'center' },
  colPrice: { width: 60, textAlign: 'right' },
  colTotal: { width: 60, textAlign: 'right' },
  thText: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1,
    color: '#aaa',
  },
  bookImg: {
    width: 36,
    height: 48,
    objectFit: 'cover',
    borderRadius: 2,
  },
  tdTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#111',
    marginBottom: 2,
  },
  tdAuthor: {
    fontSize: 8,
    fontWeight: 400,
    color: '#999',
  },
  tdText: {
    fontSize: 10,
    fontWeight: 400,
    color: '#555',
  },
  tdTextBold: {
    fontSize: 10,
    fontWeight: 700,
    color: '#111',
  },
  totalsSection: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  totalDivider: {
    height: 1,
    backgroundColor: '#e8e8e8',
    width: 200,
    marginVertical: 8,
  },
  totalLabel: { fontSize: 10, fontWeight: 400, color: '#666' },
  totalValue: { fontSize: 10, fontWeight: 400, color: '#666' },
  grandLabel: { fontSize: 12, fontWeight: 700, color: '#111' },
  grandValue: { fontSize: 14, fontWeight: 800, color: '#111' },
  footer: {
    position: 'absolute',
    bottom: 32,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTop: '1 solid #e8e8e8',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    fontWeight: 400,
    color: '#bbb',
  },
});

const getPrice = (item: {
  priceDiscount: number | null;
  priceRegular: number;
}) => item.priceDiscount ?? item.priceRegular;

const getBadgeStyle = (status: Order['status']) => {
  const map = {
    paid: { badge: styles.badgePaid, text: styles.badgeTextPaid },
    pending: { badge: styles.badgePending, text: styles.badgeTextPending },
    processing: { badge: styles.badgePending, text: styles.badgeTextPending },
    failed: { badge: styles.badgeFailed, text: styles.badgeTextFailed },
    cancelled: {
      badge: styles.badgeCancelled,
      text: styles.badgeTextCancelled,
    },
  };
  return map[status] ?? map.pending;
};

interface InvoicePDFProps {
  order: Order;
}

export const InvoicePDF = ({ order }: InvoicePDFProps) => {
  const badgeStyle = getBadgeStyle(order.status);

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        {/* ── Header ────────────────────────────── */}
        <View style={styles.header}>
          <Text style={styles.logo}>NICE BOOOK</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.invoiceLabel}>INVOICE</Text>
            <Text style={styles.invoiceId}>{order.id}</Text>
          </View>
        </View>

        {/* ── Meta row 1 — дата, оплата, статус ── */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            paddingBottom: 20,
            borderBottom: '1 solid #f0f0f0',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.metaLabel}>DATE</Text>
            <Text style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>
              {new Date(order.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.metaLabel}>PAYMENT</Text>
            <Text style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>
              {order.paymentMethod === 'stripe' ? 'Stripe (Card)' : 'LiqPay'}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.metaLabel}>STATUS</Text>
            <View style={[styles.badge, badgeStyle.badge]}>
              <Text style={[styles.badgeText, badgeStyle.text]}>
                {order.status.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        {/* ── Meta row 2 — білінг і доставка ───── */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 36,
          }}
        >
          {/* Bill to */}
          <View style={{ flex: 1, paddingRight: 24 }}>
            <Text style={styles.metaLabel}>BILL TO</Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#111',
                marginBottom: 4,
              }}
            >
              {order.customer.firstName} {order.customer.lastName}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 400,
                color: '#555',
                marginBottom: 2,
              }}
            >
              {order.customer.email}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: 400, color: '#555' }}>
              {order.customer.phone}
            </Text>
          </View>

          {/* Divider */}
          <View
            style={{
              width: 1,
              backgroundColor: '#eeeeee',
              marginHorizontal: 8,
            }}
          />

          {/* Ship to */}
          <View style={{ flex: 1, paddingLeft: 24 }}>
            <Text style={styles.metaLabel}>SHIP TO</Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#111',
                marginBottom: 4,
              }}
            >
              {order.customer.firstName} {order.customer.lastName}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 400,
                color: '#555',
                marginBottom: 2,
              }}
            >
              {order.customer.address}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 400,
                color: '#555',
                marginBottom: 2,
              }}
            >
              {order.customer.city}, {order.customer.zip}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: 400, color: '#555' }}>
              {order.customer.country}
            </Text>
          </View>
        </View>

        {/* ── Table header ──────────────────────── */}
        <View style={styles.tableHeader}>
          <View style={styles.colImg} />
          <View style={styles.colItem}>
            <Text style={styles.thText}>ITEM</Text>
          </View>
          <View style={styles.colQty}>
            <Text style={styles.thText}>QUANTITY</Text>
          </View>
          <View style={styles.colPrice}>
            <Text style={styles.thText}>PRICE</Text>
          </View>
          <View style={styles.colTotal}>
            <Text style={styles.thText}>TOTAL</Text>
          </View>
        </View>

        {/* ── Table rows ────────────────────────── */}
        {order.items.map((item) => (
          <View
            key={item.id}
            style={styles.tableRow}
          >
            <View style={styles.colImg}>
              {item.images?.[0] && (
                <Image
                  src={item.images[0]}
                  style={styles.bookImg}
                />
              )}
            </View>
            <View style={styles.colItem}>
              <Text style={styles.tdTitle}>{item.name}</Text>
              <Text style={styles.tdAuthor}>
                {item.author} · {item.type}
              </Text>
            </View>
            <View style={styles.colQty}>
              <Text style={styles.tdText}>{item.quantity}</Text>
            </View>
            <View style={styles.colPrice}>
              <Text style={styles.tdText}>${getPrice(item).toFixed(2)}</Text>
            </View>
            <View style={styles.colTotal}>
              <Text style={styles.tdTextBold}>
                ${(getPrice(item) * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}

        {/* ── Totals ────────────────────────────── */}
        <View style={styles.totalsSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>${order.subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Shipping</Text>
            <Text style={styles.totalValue}>—</Text>
          </View>
          <View style={styles.totalDivider} />
          <View style={styles.totalRow}>
            <Text style={styles.grandLabel}>Total</Text>
            <Text style={styles.grandValue}>${order.total.toFixed(2)}</Text>
          </View>
        </View>

        {/* ── Footer ────────────────────────────── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>NICE BOOOK · niceboook.com</Text>
          <Text style={styles.footerText}>
            Generated {new Date().toLocaleDateString('en-GB')}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
