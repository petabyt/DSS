#ifndef CLICKLABEL_H
#define CLICKLABEL_H

#include <QLabel>
#include <QWidget>
#include <Qt>

class ClickLabel : public QLabel
{
    Q_OBJECT;

public:
    explicit ClickLabel(QWidget* parent = nullptr, Qt::WindowFlags f = Qt::WindowFlags());
    ~ClickLabel();

signals:
    void clicked();

protected:
    void mousePressEvent(QMouseEvent* event);
    void enterEvent(QEvent *event);
    void leaveEvent(QEvent *event);
};

#endif // CLICKLABEL_H
