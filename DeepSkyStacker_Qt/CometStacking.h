#ifndef COMETSTACKING_H
#define COMETSTACKING_H

#include <QWidget>

namespace Ui {
class CometStacking;
}

class CometStacking : public QWidget
{
    Q_OBJECT

public:
    explicit CometStacking(QWidget *parent = nullptr);
    ~CometStacking();

private:
    Ui::CometStacking *ui;
};

#endif // COMETSTACKING_H
